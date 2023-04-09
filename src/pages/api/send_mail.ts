import { NextApiRequest, NextApiResponse } from 'next';

interface FormFields {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  const { name, email, message, subject } = req.body as FormFields;

  if ( !name || !email || !message || !subject) {
    res.status(401).json({ error: 'Fill in the details' });
  }


  console.log(`Received form submission: ${name}, ${email}, ${subject}, ${message}`);

  // Do something with the form data, such as saving it to a database

  res.status(200).json({  name, email, subject, message  });
};

export default handler;
