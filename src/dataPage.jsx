import { Helmet } from 'react-helmet-async';
import 

// ----------------------------------------------------------------------

export default function dataPage() {
  return (
    <>
      <Helmet>
        <title> Fraud Detection Results </title>
      </Helmet>

      <UserView />
    </>
  );
}