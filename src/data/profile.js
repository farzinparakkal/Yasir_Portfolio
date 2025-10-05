export const profile = {
  name: 'Muhammad Yasirali P',
  title: 'DevOps Engineering',
  location: 'India, Kerala',
  phone: '+91 7510813511',
  email: 'yasirali37p@gmail.com',
  github: 'https://github.com/yasirali-p',
  linkedin: 'https://www.linkedin.com/in/yasir-ali-30aab7309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  // Public CV file path (place the file in project /public)
  resume: '/Yasirali_resume.pdf',
  photo: '/profile_photo1.jpeg',
  summary:
    'Aspiring DevOps Engineer with hands-on experience in Linux, Docker, Git, Ansible, and AWS through projects and training. Passionate about automation, cloud computing, and continuous learning. Eager to contribute to real-world teams and grow in a dynamic environment.',
  skills: {
    categories: [
      {
        name: 'Linux System Administration',
        details:
          'Proficient in basic system configuration, troubleshooting, and performance tuning.'
      },
      {
        name: 'Docker',
        details:
          'Understanding of containerization; experience with building and managing Docker containers for application deployment.'
      },
      {
        name: 'AWS',
        details:
          'Core services: EC2, S3, IAM with practical experience deploying and managing cloud resources.'
      },
      { name: 'Git', details: 'Version control: commit, push, pull, branching.' },
      {
        name: 'Ansible',
        details:
          'Automating configuration management and application deployment.'
      },
      {
        name: 'Web Hosting',
        details:
          'Deploying static and dynamic websites; DNS setup; Nginx/Apache.'
      }
    ],
    soft: ['Problem solving', 'Teamwork', 'Leadership', 'Time management', 'Quick learner'],
    languages: ['English', 'Malayalam'],
    keywords: [
      'Linux','AWS','Docker','Kubernetes','Jenkins','Git','GitHub','Terraform','Ansible','Bash','Grafana','Prometheus','Web hosting','TCP/IP','DNS'
    ]
  },
  projects: [
    {
      title: 'Build & Deploy a web application on AWS EC2 using Docker',
      description:
        'Configured Docker containers and deployed a web application on AWS EC2 ensuring consistent environment setup and smooth application delivery.'
    },
    {
      title: 'Automated Apache Web Server Deployment with self-healing using Ansible',
      description:
        'Used Ansible to automate Apache Web Server installation with self-healing features to maintain uptime and reliability.'
    },
    {
      title:
        'CI/CD pipeline for a Node.js application using Jenkins and deploy to Kubernetes on AWS EKS',
      description:
        'Created a complete CI/CD pipeline in Jenkins to build, test, and deploy a Node.js app to a Kubernetes cluster on AWS EKS.'
    },
    {
      title:
        'Highly available and scalable microservices architecture on AWS using Kubernetes, Terraform, Grafana & Prometheus',
      description:
        'Designed and implemented a microservices system using Kubernetes and Terraform on AWS, with monitoring and alerting via Grafana and Prometheus.'
    }
  ],
  education: [
    {
      program: 'DevOps Engineer',
      org: 'Synnefo Solutions',
      period: '7-month'
    },
    {
      program: 'Bachelor of Commerce (B.Com)',
      org: 'University of Calicut',
      period: '2021–2024'
    }
  ]
}
