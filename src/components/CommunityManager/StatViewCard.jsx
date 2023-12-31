import {
  Card,
  CardBody,
  Image,
  Text,
  Heading
} from '@chakra-ui/react';

import surveyIcon from '../../images/ic-1.png';

const StatViewCard=(props) => {
  return (
    <>
<Card
            size='md'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            p={[2, 2]}
            borderRadius='20'
            //width='200px'
            height={"120px"}
            align='center'
        >
            <Image
                top='50%'
                boxSize='50px'
                borderRadius='full'
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={surveyIcon}
                alt='totalSurveys'
                ml='3'
            />

            
            <CardBody>
                <Text  fontSize={'xs'} color={'#0488d4'}>
                    {props.str}
                </Text>
                <Heading size='md' color={'#2B3674'}>{props.num}</Heading>
            </CardBody>
        </Card>


    </>
  );
}
export default StatViewCard;
