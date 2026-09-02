import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    name: 'Motorcycle Crash Data & Statistics',
    description:
      'A bronze/gold lakehouse pipeline for motorcycle traffic-safety analysis. Ingests FARS data over FTP plus public APIs and web scraping, stages it in MinIO, transforms it with DuckDB, and surfaces trends and KPIs through Metabase dashboards.',
    tech: ['Python', 'Apache Airflow', 'DuckDB', 'MinIO', 'Docker', 'Metabase'],
    repoUrl: 'https://github.com/allenpotts13/data-engineering-capstone',
    highlight: 'Full end-to-end pipeline: ingestion, transformation, orchestration, and visualization.',
  },
  {
    name: 'Inventory & POS System',
    description:
      'A full-stack point-of-sale and inventory management system. A FastAPI + PostgreSQL backend powers both a web POS and a Streamlit admin app, with recipe-based inventory depletion, member tabs/balances, and rate-limited, parameterized APIs.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Streamlit', 'Pydantic'],
    repoUrl: 'https://github.com/allenpotts13/inventory-pos-system',
    highlight: 'Three-tier architecture treating POS, inventory, API, and database as one connected system.',
  },
  {
    name: 'TrueAchievements Group Service',
    description:
      'A serverless app for organizing an Xbox game library into user-defined groups, with a dashboard for gamerscore, achievements, and completion percentage. CSV exports are batch-imported into DynamoDB via Lambda.',
    tech: ['AWS Lambda', 'DynamoDB', 'Cognito', 'CloudFormation', 'Java', 'Node.js'],
    repoUrl: 'https://github.com/allenpotts13/nsscapstone_trueachievements',
    highlight: 'Secure multi-user auth (Cognito) with a fully serverless AWS backend.',
  },
  {
    name: 'Video Game Market Analysis (Power BI)',
    description:
      'An interactive Power BI report styled as a game-style experience, blending a public video game sales dataset with personal Xbox play history for a "Player One Profile" section, complete with gaming-themed KPIs and dynamic filtering.',
    tech: ['Power BI', 'Power Query', 'DAX'],
    repoUrl: 'https://github.com/allenpotts13/video-game-market-analysis-power-bi',
    highlight: 'Designed around the experience of the person reading the report, not just the numbers.',
  },
]
