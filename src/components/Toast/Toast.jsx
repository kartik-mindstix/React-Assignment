import React, { useEffect } from "react";
import "./Toast.css";
import { MdOutlineDone } from "react-icons/md";

const Toast = ({ message, duration = 10000, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose, duration]);
	return (
		<div className="toast">
			<MdOutlineDone />
			{message}
		</div>
	);
};

export default Toast;
