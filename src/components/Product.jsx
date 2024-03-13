import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function Product(props) {
    return (
        <Card className="w-1/4 mt-2">
            <CardHeader shadow={false} floated={false} className="h-72">
                <img
                    src={props.image}
                    alt={props.image}
                    className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {props.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        ₹ {props.price}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}