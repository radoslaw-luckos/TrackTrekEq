import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../utils/Enums';

type Props = {};

const ListComponent = (props: Props) => {
	return <Link to={Path.Welcome}>To Welcome</Link>;
};

export default ListComponent;
