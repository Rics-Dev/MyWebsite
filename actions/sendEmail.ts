'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);




export const sendEmail = async (formData: FormData) => {

    const message = formData.get("message");
    const email = formData.get("senderEmail");






    //server side validation

    await resend.emails.send({
        from: 'Contact form <onboarding@resend.dev>',
        to: 'racimfethallah@proton.me',
        subject: 'Portfolio website',
        reply_to: email as string,
        text: message as string, 
    });

    console.log("Running on server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));




}