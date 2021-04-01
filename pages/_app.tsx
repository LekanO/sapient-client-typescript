import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://sapient-node-deploy.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <Head>
            <title>Sapient Client</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel="stylesheet" type="text/css" href="https://semantic-ui.com/dist/semantic.min.css" />
        </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;