
"use client";

import { Accordion } from "flowbite-react";

function AccordionCom() {
  return (
    <Accordion className="divide-opacity-10 border-none">

      <Accordion.Panel>
        <Accordion.Title className="bg-transparent pl-0 hover:bg-transparent text-heading text-[16px] md:text-[18px] focus:ring-0">What Is Amz ? How does it work ?</Accordion.Title>
        <Accordion.Content className="pl-0">
          <p className="mb-2 text-p text-sm md:text-md">
             Welcome to Amz HTML Personal Portfolio, HTML Portfolio and Multi Purpose Template Built With HTML. It works too much faster loading speed and you can works too much comfortability.InBio create your website so much faster, use to use and Well Documented Codes for your customization.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="bg-transparent pl-0 hover:bg-transparent text-heading text-[16px] md:text-[18px] focus:ring-0 capitalize">How can i get the customer support?</Accordion.Title>
        <Accordion.Content className="pl-0">
          <p className="mb-2 text-p text-sm md:text-md">
            After purchasing the product need you any support you can be share with us with sending mail to 
          </p>
          <p className="mb-2 text-heading text-sm md:text-md">
            <a href="https://mail.google.com/">osamasaif242@gmail.com</a>
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="bg-transparent pl-0 hover:bg-transparent text-heading text-[16px] md:text-[18px] focus:ring-0 capitalize">Can i get update regulary and for how long do i get updates?</Accordion.Title>
        <Accordion.Content className="pl-0">
          <p className="mb-2 text-p text-sm md:text-md">
            Yes, We wil get update the Amz. And you can can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className="bg-transparent pl-0 hover:bg-transparent text-heading text-[16px] md:text-[18px] focus:ring-0 capitalize">Can i change any elements as i like?</Accordion.Title>
        <Accordion.Content className="pl-0">
          <p className="mb-2 text-p text-sm md:text-md">
            Yes, You can change any Elements as you like. And By the way you can build your website which you are choose.
          </p>
        </Accordion.Content>
      </Accordion.Panel>


      <Accordion.Panel>
        <Accordion.Title className="bg-transparent pl-0 hover:bg-transparent text-heading text-[16px] md:text-[18px] focus:ring-0 capitalize">Can i build complete project with this template?</Accordion.Title>
        <Accordion.Content className="pl-0">
          <p className="mb-2 text-p text-sm md:text-md">
            Yes, Why not. You can build a project and complete website as you are like.More component are available include in this templete. And you can be use it following documentation.
          </p>
        </Accordion.Content>
      </Accordion.Panel>



    </Accordion>
  );
}

export default AccordionCom;