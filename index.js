const INVOCIES = {
  customer: "BigCo",
  performances: [
    {
      playID: "othello",
      audience: 40,
    },
    {
      playID: "hamlet",
      audience: 55,
    },

    {
      playID: "aslike",
      audience: 35,
    },
  ],
};

const PLAYS = {
  aslike: {
    name: "As You Like It",
    type: "comedy",
  },
  hamlet: {
    name: "hamlet",
    type: "tragedy",
  },
  othello: {
    name: "Othello",
    type: "tragedy",
  },
};

// // before
// function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구내역 (고객명: ${invoice.customer})\n`;

//   const format = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   }).format;

//   for (let perf of invoice.performances) {
//     const play = plays[perf.playID];

//     let thisAmount = 0;

//     switch (play.type) {
//       case "tragedy": // 비극
//         thisAmount = 40000;

//         if (perf.audience > 30) {
//           thisAmount += 1000 * (perf.audience - 30);
//         }
//         break;
//       case "comedy": // 희극
//         thisAmount = 30000;

//         if (perf.audience > 20) {
//           thisAmount += 10000 + 500 * (perf.audience - 20);
//         }
//         thisAmount += 300 * perf.audience;

//         break;

//       default:
//         throw new Error(`알 수 없는 장르 : ${play.type}`);
//     }

//     // 포인트를 적립한다.
//     volumeCredits += Math.max(perf.audience - 30, 0);

//     // 희극 관객 5명마다 추가 포인트를 제공한다.
//     if ("comedy" === play.type) {
//       volumeCredits += Math.floor(perf.audience / 5);
//     }

//     result += `${play.name} : ${format(thisAmount / 100)} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += thisAmount;
//   }

//   result += `총액: ${format(totalAmount / 100)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;

//   return result;
// }

// switch문 함수 추출, thisamount 초기화 필요, naming 바꾸기 thisamount => result , perf => aPerformance
// function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구내역 (고객명: ${invoice.customer})\n`;

//   const format = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   }).format;

//   for (let perf of invoice.performances) {
//     const play = plays[perf.playID];
//     let thisAmount = amoutFor(perf, play);

//     // 포인트를 적립한다.
//     volumeCredits += Math.max(perf.audience - 30, 0);

//     // 희극 관객 5명마다 추가 포인트를 제공한다.
//     if ("comedy" === play.type) {
//       volumeCredits += Math.floor(perf.audience / 5);
//     }

//     result += `${play.name} : ${format(thisAmount / 100)} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += thisAmount;
//   }

//   result += `총액: ${format(totalAmount / 100)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;

//   return result;
// }

// function amoutFor(aPerformance, play) {
//   let result = 0;

//   switch (play.type) {
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
//       throw new Error(`알 수 없는 장르 : ${play.type}`);
//   }

//   return result;
// }

// play는 개별 공연에서 얻으므로 애초에 매개변수로 전달할 필요없다. play  지역변수 제거
// function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구내역 (고객명: ${invoice.customer})\n`;

//   const format = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   }).format;

//   for (let perf of invoice.performances) {
//     let thisAmount = amoutFor(perf, playFor(perf));

//     // 포인트를 적립한다.
//     volumeCredits += Math.max(perf.audience - 30, 0);

//     // 희극 관객 5명마다 추가 포인트를 제공한다.
//     if ("comedy" === playFor(perf).type) {
//       volumeCredits += Math.floor(perf.audience / 5);
//     }

//     result += `${playFor(perf).name} : ${format(thisAmount / 100)} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += thisAmount;
//   }

//   result += `총액: ${format(totalAmount / 100)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;

//   return result;

//   function playFor(aPerformance) {
//     return plays[aPerformance.playID];
//   }

//   function amoutFor(aPerformance) {
//     let result = 0;

//     switch (playFor(aPerformance).type) {
//       case "tragedy": // 비극
//         result = 40000;

//         if (aPerformance.audience > 30) {
//           result += 1000 * (aPerformance.audience - 30);
//         }
//         break;
//       case "comedy": // 희극
//         result = 30000;

//         if (aPerformance.audience > 20) {
//           result += 10000 + 500 * (aPerformance.audience - 20);
//         }
//         result += 300 * aPerformance.audience;

//         break;

//       default:
//         throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
//     }

//     return result;
//   }
// }

// thisAmount 변수 인라인, volumeCreditsFor함수 추출, format함수추출
// function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구내역 (고객명: ${invoice.customer})\n`;

//   for (let perf of invoice.performances) {
//     volumeCredits += volumeCreditsFor(perf);

//     result += `${playFor(perf).name} : ${usd(amoutFor(perf))} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += amoutFor(perf);
//   }

//   result += `총액: ${usd(totalAmount)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;

//   return result;

//   function playFor(aPerformance) {
//     return plays[aPerformance.playID];
//   }

//   function amoutFor(aPerformance) {
//     let result = 0;

//     switch (playFor(aPerformance).type) {
//       case "tragedy": // 비극
//         result = 40000;

//         if (aPerformance.audience > 30) {
//           result += 1000 * (aPerformance.audience - 30);
//         }
//         break;
//       case "comedy": // 희극
//         result = 30000;

//         if (aPerformance.audience > 20) {
//           result += 10000 + 500 * (aPerformance.audience - 20);
//         }
//         result += 300 * aPerformance.audience;

//         break;

//       default:
//         throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
//     }

//     return result;
//   }

//   function volumeCreditsFor(aPerformance) {
//     let result = 0;
//     result += Math.max(aPerformance.audience - 30, 0);
//     if ("comedy" === playFor(aPerformance).type) {
//       result += Math.floor(aPerformance.audience / 5);
//     }
//     return result;
//   }

//   function usd(aNumber) {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//     }).format(aNumber / 100);
//   }
// }

// totalAmount, volumeCredits 변수 제거 ~ 반복문 쪼개기 문장 슬라이드하기 함수 추출하기 변수 인라인하기
// function statement(invoice, plays) {
//   let result = `청구내역 (고객명: ${invoice.customer})\n`;

//   for (let perf of invoice.performances) {
//     result += `${playFor(perf).name} : ${usd(amoutFor(perf))} (${
//       perf.audience
//     }석)\n`;
//   }

//   result += `총액: ${usd(totalAmount())}\n`;
//   result += `적립 포인트: ${totlaVolumeCredits()}점\n`;

//   return result;

//   function playFor(aPerformance) {
//     return plays[aPerformance.playID];
//   }

//   function amoutFor(aPerformance) {
//     let result = 0;

//     switch (playFor(aPerformance).type) {
//       case "tragedy": // 비극
//         result = 40000;

//         if (aPerformance.audience > 30) {
//           result += 1000 * (aPerformance.audience - 30);
//         }
//         break;
//       case "comedy": // 희극
//         result = 30000;

//         if (aPerformance.audience > 20) {
//           result += 10000 + 500 * (aPerformance.audience - 20);
//         }
//         result += 300 * aPerformance.audience;

//         break;

//       default:
//         throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
//     }

//     return result;
//   }

//   function totalAmount() {
//     let result = 0;
//     for (let perf of invoice.performances) {
//       result += amoutFor(perf);
//     }
//     return result;
//   }

//   function totlaVolumeCredits() {
//     let result = 0;
//     for (let perf of invoice.performances) {
//       result += volumeCreditsFor(perf);
//     }
//     return result;
//   }

//   function volumeCreditsFor(aPerformance) {
//     let result = 0;
//     result += Math.max(aPerformance.audience - 30, 0);
//     if ("comedy" === playFor(aPerformance).type) {
//       result += Math.floor(aPerformance.audience / 5);
//     }
//     return result;
//   }

//   function usd(aNumber) {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//     }).format(aNumber / 100);
//   }
// }

import createStatementData from "./createStatementData.js";

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `청구내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name} : ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer} )</h1>\n`;

  result += "<table>\n";
  result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";

  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
  result += "</table>\n";

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}
console.log(statement(INVOCIES, PLAYS));
