const data = [
    { no: 1, name: "Certified Islamic Banking Expert (CIBE)", awarding: "SLIBF", lang: "EN/AR", reg: 20, prog: 250, book: 25, cert: 50, total: 345 },
    { no: 2, name: "Certified Islamic Insurance Expert (CIIE)", awarding: "SLIBF", lang: "EN/AR", reg: 20, prog: 250, book: 25, cert: 50, total: 345 },
    { no: 3, name: "Certified Public Finance Expert (CPFE)", awarding: "SLIBF", lang: "EN/AR", reg: 20, prog: 250, book: 25, cert: 50, total: 345 },
    { no: 4, name: "Certified Islamic Banker (CIB)", awarding: "CIBAFI", lang: "EN/AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 5, name: "Certified Islamic Bank Manager (CIBM)", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 6, name: "Certified Islamic Specialist in Capital Markets", awarding: "CIBAFI", lang: "EN/AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 7, name: "Certified Islamic Specialist in Trade Finance", awarding: "CIBAFI", lang: "EN/AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 8, name: "Certified Islamic Specialist in Takaful", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 9, name: "Certified Islamic Specialist in Accounting", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 10, name: "Certified Islamic Specialist in Governance and Compliance", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 11, name: "Certified Islamic Specialist in Risk Management", awarding: "CIBAFI", lang: "EN/AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 12, name: "Certified Islamic Specialist in Advanced Sharia Auditing", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 13, name: "Certified Islamic Specialist in Product Development", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 14, name: "Certified Specialist in Islamic Sustainability Management", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 250, book: 10, cert: 0, total: 280 },
    { no: 15, name: "Certificate of Proficiency in Financial Accounting Standards (CPFAS)", awarding: "AAOIFI", lang: "EN/AR", reg: 20, prog: 500, book: 25, cert: 0, total: 545 },
    { no: 16, name: "Certificate of Proficiency in Shari'ah Standards (CPSS)", awarding: "AAOIFI", lang: "EN/AR", reg: 20, prog: 500, book: 25, cert: 0, total: 545 },
    { no: 17, name: "Certificate of Proficiency in Audit, Assurance, Governance & Ethics", awarding: "AAOIFI", lang: "EN/AR", reg: 20, prog: 500, book: 25, cert: 0, total: 545 },
    { no: 18, name: "Professional Advanced Diploma in Islamic Finance", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 500, book: 30, cert: 0, total: 550 },
    { no: 19, name: "Professional Diploma in Accounting", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 500, book: 30, cert: 0, total: 550 },
    { no: 20, name: "Professional Diploma in Risk Management", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 500, book: 30, cert: 0, total: 550 },
    { no: 21, name: "Professional Diploma in Shari'ah Auditing", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 500, book: 30, cert: 0, total: 550 },
    { no: 22, name: "Professional Diploma in Takaful Insurance", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 500, book: 30, cert: 0, total: 550 },
    { no: 23, name: "Executive Professional Master in Islamic Finance", awarding: "CIBAFI", lang: "AR", reg: 20, prog: 800, book: 50, cert: 0, total: 870 },
    { no: 24, name: "Certified Shari'ah Auditor and Adviser (CSAA)", awarding: "AAOIFI", lang: "EN/AR", reg: 20, prog: 800, book: 50, cert: 0, total: 870 },
    { no: 25, name: "Certified Islamic Professional Accountant (CIPA)", awarding: "AAOIFI", lang: "EN/AR", reg: 20, prog: 1000, book: 75, cert: 0, total: 1095 },
    { no: 26, name: "Certified Shari'ah Expert (CSE)", awarding: "AAOIFI", lang: "AR", reg: 20, prog: 1000, book: 100, cert: 0, total: 1120 }
];

let htmlStr = '';
for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const certStr = item.cert === 0 ? "0" : "$" + item.cert;
    htmlStr += `                        <tr>
                            <td>${item.no}</td>
                            <td><strong>${item.name}</strong></td>
                            <td>${item.awarding}</td>
                            <td><span class="id-badge">${item.lang}</span></td>
                            <td>$${item.reg}</td>
                            <td>$${item.prog}</td>
                            <td>$${item.book}</td>
                            <td>${certStr}</td>
                            <td><strong>$${item.total}</strong></td>
                            <td><button onclick="applyForProgram('${item.name.replace(/'/g, "\\'")}')" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.8rem;"><i class="fas fa-edit"></i> Apply</button></td>
                        </tr>\n`;
}

// Write to options file for select
let optionsStr = '';
for (let i = 0; i < data.length; i++) {
    const item = data[i];
    optionsStr += `                                <option value="${item.name}">${item.name}</option>\n`;
}

require('fs').writeFileSync('tmpHtml.txt', htmlStr + "\n====================\n" + optionsStr);
