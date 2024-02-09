'use server';

import { resendApiKey } from '@/lib/environement';
import { Resend } from 'resend';

const resend = new Resend(resendApiKey);




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