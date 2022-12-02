import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='white' borderRadius='md'>
      <Image src={imageSrc} borderRadius='md'/>
      <VStack bg='white' align='start' p={2} borderRadius='md'>

      <Heading fontSize='lg' color='black'>{title}</Heading>
      <Text fontSize='sm' color='#2A4365'>{description}</Text>
      <HStack>
        <Text color='black' fontSize='xs'>See more </Text>
        <FontAwesomeIcon icon={ faArrowRight} size='1x' color='black'/>    
      </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
