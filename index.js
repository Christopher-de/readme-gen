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
            name:'contributing'
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
        },
        {
            type: 'input',
            message: 'What should I do if I have an issue?',
            name: 'questions'
        }
    ])
    .then((res) => {
        console.log('Creating README File');
        createReadme(res);
    })
    .catch((err) => {
        console.log(err);
    })


    function createReadme() {
        let title;
        let description;
        let tableOfCont;
        let install;
        let usage;
        let contribution;
        let test;
        let license = input.license;
        let questions;

        const descriptionHead = '## Description';
        const tocHead = '## Table of Contents';
        const installHead = '## Installation';
        const usageHead = '##'
        
    };