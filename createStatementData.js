

// export default function createStatementData(invoice, plays) {
//   const result = {};
//   result.customer = invoice.customer;
//   result.performances = invoice.performances.map(enrichPerformance);
//   result.totalAmount = totalAmount(result);
//   result.totalVolumeCredits = totalVolumeCredits(result);
//   return result;

//   // 객체 얕은 복사

//   function playFor(aPerformance) {
//     return plays[aPerformance.playID];
//   }

//   function enrichPerformance(aPerformance) {
//     // console.log(aPerformance);
//     const result = Object.assign({}, aPerformance);
//     result.play = playFor(result);
//     result.amount = amountFor(result);
//     result.volumeCredits = volumeCreditsFor(result);
//     return result;
//   }
// }

// function totalAmount(data) {
//   return data.performances.reduce((total, p) => total + p.amount, 0);
// }

// function totalVolumeCredits(data) {
//   return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
// }

// function volumeCreditsFor(aPerformance) {
//   let result = 0;
//   result += Math.max(aPerformance.audience - 30, 0);
//   if ("comedy" === aPerformance.play.type) {
//     result += Math.floor(aPerformance.audience / 5);
//   }
//   return result;
// }

// function amountFor(aPerformance) {
//   let result = 0;

//   switch (aPerformance.play.type) {
//     case "tragedy": // 비극
//       result = 40000;

//       if (aPerformance.audience > 30) {
//         result += 1000 * (aPerformance.audience - 30);
//       }
//       break;
//     case "comedy": // 희극
//       result = 30000;

//       if (aPerformance.audience > 20) {
//         result += 10000 + 500 * (aPerformance.audience - 20);
//       }
//       result += 300 * aPerformance.audience;

//       break;

//     default:
//       throw new Error(`알 수 없는 장르 : ${aPerformance.play.type}`);
//   }

//   return result;
// }









export default function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  // 객체 얕은 복사

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    // console.log(calculator);
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits
    return result;
  }
  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
  
  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }  
}


function createPerformanceCalculator(aPerformance, aPlay) {
  switch(aPlay.type) {
    case "tragedy" : return new TragedyCalculator(aPerformance, aPlay);
    case "comedy" : return new ComedyCalculator(aPerformance, aPlay);
    default :
    throw new Error(`알 수 없는 장르 : ${aPlay.type}`);
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay){
    this.performance = aPerformance;
    this.play = aPlay;
  }
  get amount() {
    throw new Error('서브 클래스에서 처리')
  }
  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
  
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result
  }
}

class ComedyCalculator extends PerformanceCalculator{
  get amount() {
    let result = 30000;
  
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result
  }
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}