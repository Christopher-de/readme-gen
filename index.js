const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name:'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name:'description'
        },
        {
            type: 'input',
            message: 'Write a small description about the installation process:',
            name:'install'
        },
        {
            type: 'input',
            message: 'Enter the usage information for your project',
            name:'usage'
        },
        {
            type: 'input',
            message: 'Enter the name(s) of those who contributed:',
            name:'contribution'
        },
        {
            type: 'input',
            message: 'What tests are included if any?',
            name:'tests'
        },
        {
            type: 'input',
            message: 'Enter your GitHub Username:',
            name:'github'
        },
        {
            type: 'input',
            message: 'Enter your email:',
            name:'email'
        },
        {
            type: 'list',
            name:'license',
            message: 'Choose the appropriate licensing:',
            choices: [
                'MIT License',
                'Code Open Project License (CPOL)',
                'Common Development and Distribution License (CDDL)',
                'Microsoft public License (Ms-PL)',
                'Mozilla Public License',
                'Common Public License',
                'Eclipse Public License',
                'Apache License'
            ]
        }
    ])
    .then((res) => {
        console.log('Creating README File');
        createReadme(res);
    })
    .catch((err) => {
        console.log(err);
    })


    function createReadme(res) {
        let titleEl;
        let descriptionEl;
        let tableOfContEl;
        let installEl;
        let usageEl;
        let contributionEL;
        let testEL;
        let questionsEL;
        let licenseEl = res.license;

        const descriptionHead = '## Description';
        const tocHead = '## Table of Contents';
        const installHead = '## Installation';
        const usageHead = '## Usage';
        const contributionHead = '## Contribution';
        const testHead = '## Tests';
        const licenseHead = '## License';
        const questionHead = '## Questions';
        
        let finalREADME = [];

        if (res.title == '') {
            titleEl = '# Title';
        } else {
            titleEl = `# ${res.title}`;
        }
        finalREADME.push(titleEl);

        let badge = `![](https://img.shields.io/badge/license-${licenseEl.replace(/ /g, '%20')}-blue?style=flat-square)`;
        finalREADME.push(badge);

        if (res.descriptionEl == '') {
            descriptionEl = `${descriptionHead}\n Enter project description here`;
        } else {
            descriptionEl = `${descriptionHead}\n ${res.description}`;
        }
        finalREADME.push(descriptionEl);

        
        
        tableOfContEl = `${tocHead}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#question)\n*`;
        finalREADME.push(tableOfContEl);

        
        
        finalREADME.push(`${installHead}`);

        installEl = res.install.split(',').map(item => {
            return `${item.trim()}`;
        });

        for (let i=0; i<installEl.length; i++) {
            finalREADME.push(`${i+1}. ${installEl[i]}`);
        }

        if (res.usage == '') {
            usageEl = `\n${usageHead}\n Enter project usage here.`;
        } else {
            usageEl = `\n${usageHead}\n ${res.usage}`;
        }
        finalREADME.push(usageEl);

        
        
        if (res.contribution == '') {
            contributionEL = `\n${contributionHead}\n Enter project contribution here`;
        } else {
            contributionEL = `\n ${contributionHead}\n ${res.contribution}`;
        }
        finalREADME.push(contributionEL);


        if (res.tests == '') {
            testEL = `\n${testHead}\n Enter test info here`;
        } else {
            testEL = `\n${testHead}\n ${res.tests}`;
        }
        finalREADME.push(testEL);


        licenseEl = `\n${licenseHead}\n This project is covered under the ${res.license}.`;
        finalREADME.push(licenseEl);


        questionsEL = `\n${questionHead}\n For questions about this project please see my Github at [${res.github}](https://github.com/${res.github}), or reach out to me be email at ${res.email}`;
        finalREADME.push(questionsEL);

        const README = finalREADME.join('\n');

        fs.writeFile('./example/README-example.md', README, (err) => {
            if (err) {
                throw err;
            } else {
                console.log('README Successfully Created!');
            }
        });
    };