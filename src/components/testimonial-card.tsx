import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Avatar src={img} className="mb-3" alt={client} size="lg" />
       
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;