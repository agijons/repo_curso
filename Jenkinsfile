    pipeline {
        agent any
     
        tools {nodejs "Node"}
     
        stages {
     
            stage('Cypress Parallel Test Suite') {
                parallel {
                    stage('Slave 1') {
                        agent {
                            label "CursoCypressAgent_1"
                        }
                        steps {
                            git url: 'https://github.com/agijons/repo_curso.git'
                            bat 'npm install'
                            bat 'npm ci'
                            bat 'npx cypress run --spec "cypress/e2e/cucumber1/**/*"'                       
                        
                        }
                    }
     
                    stage('Slave 2') {
                        agent {
                            label "CursoCypressAgent_2"
                        }
                        steps {
                            git url: 'https://github.com/agijons/repo_curso.git'
                            bat 'npm install'
                            bat 'npm ci'
                            bat 'npx cypress run --spec "cypress/e2e/seccion_1/**/*"'                      
                        
                        }
                    }
     
                    stage('Slave 3') {
                        agent {
                            label "CursoCypressAgent_3"
                        }
                        steps {
                            git url: 'https://github.com/agijons/repo_curso.git'
                            bat 'npm install'
                            bat 'npm ci'                       
                            bat 'npx cypress run'                       
                        
                        }
                    }
     
                    stage('Slave 4') {
                        agent {
                            label "CursoCypressAgent_4"
                        }
                        steps {
                            git url: 'https://github.com/agijons/repo_curso.git'
                            bat 'npm install'
                            bat 'npm ci'
                            bat 'npx cypress run'                       

                        }
                    }
     
                   
     
                    
       
                      
                }
     
                 
            }
     
        }
                
    }