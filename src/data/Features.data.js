import React from 'react';

import { GiCakeSlice, GiHeartInside, GiStairsCake } from 'react-icons/gi';
import { FaShoppingBasket, FaCommentDollar } from 'react-icons/fa';
import { BiHappyBeaming } from 'react-icons/bi';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Custommed products',
		description: 'Our goods are custom-made according to your preference',
		icon: iconStyle(GiCakeSlice),
		imgClass: 'one',
	},
	{
		name: 'Fresh Supplies',
		description: 'We work only with fresh supplies resulting in good-quality baked goods. ',
		icon: iconStyle(FaShoppingBasket),
		imgClass: 'two',
	},
	{
		name: 'Flavour',
		description: 'The most unforgettable feature of any cake is its flavour. We want you to remember us for it.',
		icon: iconStyle(BiHappyBeaming),
		imgClass: 'three',
	},
    {
		name: 'Every Detail Matters',
		description: 'All our goods are baked with passion and care. We bake memories.',
		icon: iconStyle(GiHeartInside),
		imgClass: 'four',
	},
	{
		name: 'Affordable Prices',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(FaCommentDollar),
		imgClass: 'five',
	},
	{
		name: 'Variety',
		description:
			'We offer different types of products and flavour choices',
		icon: iconStyle(GiStairsCake),
		imgClass: 'six',
	},
];