import type { ExperienceEntry } from '../types/content'

export const experience: ExperienceEntry[] = [
  {
    role: 'Data Engineer Apprentice',
    org: 'Nashville Software School',
    start: 'May 2025',
    end: 'Sept 2025',
    bullets: [
      'Designed and implemented data pipelines ingesting CSV, JSON, REST API, and SFTP sources into Snowflake and PostgreSQL.',
      'Built raw-to-cleaned transformation layers using SQL and dbt-style modeling practices.',
      'Orchestrated scheduled workflows using Apache Airflow, including dependency management and failure handling.',
      'Implemented Python-based data validation checks to detect schema drift, missing fields, and data quality issues.',
      'Developed and deployed FastAPI services to expose and integrate data across Microsoft SQL Server and Snowflake.',
      'Explored event-driven and near real-time ingestion patterns using Kafka and pub-sub concepts.',
      'Automated pipeline execution and testing using GitHub-based CI/CD workflows.',
    ],
  },
  {
    role: 'Software Engineer Apprentice (Java / AWS)',
    org: 'Nashville Software School',
    start: 'Mar 2022',
    end: 'Dec 2022',
    bullets: [
      'Built backend services using Java and AWS services, including Lambda, DynamoDB, RDS, S3, and CloudFormation.',
      'Implemented RESTful APIs and business logic with a focus on maintainability and testability.',
      'Wrote unit and integration tests using JUnit and Mockito to validate application behavior.',
      'Practiced object-oriented design, dependency injection, and debugging of production-like systems.',
      'Collaborated in Agile Scrum teams using Git and GitHub for version control and code reviews.',
    ],
  },
  {
    role: 'IT Support Specialist Sr',
    org: 'First Horizon Bank',
    start: 'Aug 2018',
    end: 'Present',
    bullets: [
      'Supported production systems across geographically distributed branch locations, resolving incidents under SLA constraints.',
      'Diagnosed and troubleshot complex workstation, network, and application issues using structured root cause analysis.',
      'Followed formal Change, Incident, and Problem Management processes to maintain system stability and auditability.',
      'Created and maintained internal documentation and knowledgebase articles to standardize resolutions and reduce repeat incidents.',
      'Coordinated with external vendors and internal teams to deploy fixes, upgrades, and site-level improvements.',
    ],
  },
  {
    role: 'LAN Administrator',
    org: 'Systems & Methods, Inc.',
    start: 'Sept 2012',
    end: 'Aug 2018',
    bullets: [
      'Maintained LAN and WAN environments, virtual machines, and on-prem infrastructure across multiple locations.',
      'Monitored server room health, network connectivity, and security systems.',
      'Created and maintained technical documentation for network topology and system configurations.',
      'Provided remote support for users and systems across multiple states.',
    ],
  },
]
