declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: 'development' | 'production';
      COMPANY_NUMBER_API_KEY: string;
      COMPANY_NUMBER_NUMBER_URL: string;
      COMPANY_NUMBER_NAME_URL: string;

      DARABASE_HOST: string,
      DATABASE_PORT: string,
      DATABASE_USERNAME: string,
      DATABASE_PASSWORD: string,
      DATABASE_NAME: string,
    }
  }
}

export {};
