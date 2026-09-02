import type { SkillCategory } from '../types/content'

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Java'],
  },
  {
    label: 'Data & Analytics',
    items: [
      'PostgreSQL',
      'Microsoft SQL Server',
      'Snowflake',
      'Databricks',
      'DuckDB',
      'dbt',
      'Power BI',
    ],
  },
  {
    label: 'Cloud',
    items: [
      'AWS (S3, Lambda, DynamoDB, CloudFormation, CloudWatch)',
      'Azure (Functions, Blob Storage)',
    ],
  },
  {
    label: 'Concepts',
    items: [
      'ETL/ELT pipelines',
      'Data modeling',
      'Data validation',
      'Schema management',
      'Orchestration',
      'Batch processing',
      'Streaming concepts',
    ],
  },
  {
    label: 'Tools',
    items: ['Apache Airflow', 'FastAPI', 'Docker', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    label: 'Integration',
    items: ['REST APIs', 'CSV/JSON ingestion', 'SFTP', 'Web scraping', 'Pub-sub concepts'],
  },
]
