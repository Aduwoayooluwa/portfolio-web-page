import { NextApiRequest, NextApiResponse } from 'next';
import { CourierClient } from "@trycourier/courier";
import dotenv from 'dotenv'
interface FormFields {
  name: string;
  email: string;
  message: string;
  subject: string;
}

dotenv.config()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }


  
  const { name, message, subject } = req.body as FormFields;

  if ( !name || !message || !subject) {
    res.status(401).json({ error: 'Fill in the details' });
  }
  const courier = CourierClient(
    { authorizationToken: process.env.COURIER_ID});

  const { requestId } = await courier.send({
    message: {
      content: {
        title: name,
        body: message
      },
      data: {
        message: message
      },
      to: {
        email: "aduwoayooluwa2017@gmail.com"
      }
    }
  });

  console.log(`Received form submission: ${name}, ${email}, ${subject}, ${message}`);

  // Do something with the form data, such as saving it to a database
  const messageStatus = await courier.getMessage(requestId);
  res.status(200).json({  name, email, subject, message, messageStatus  });
};

export default handler;
