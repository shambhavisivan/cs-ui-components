import React from 'react';

export interface CSUnmountDelayProps {
	[key: string]: any;
	visible?: boolean;
	animated?: boolean;
}

export interface CSUnmountDelayState {
	mounted?: boolean;
}

const withCSUnmountDelay = (Component: any, timeout: number = 200) => {
	class CSUnmountDelay extends React.Component<CSUnmountDelayProps, CSUnmountDelayState> {
		public static defaultProps = {
			animated: true,
			visible: false,
		};

		public timer: number;

		constructor(props: CSUnmountDelayProps) {
			super(props);
			this.state = { mounted: false };
			this.timer = 0;
			this.setMounted = this.setMounted.bind(this);
		}

		componentDidUpdate(prevProps: CSUnmountDelayProps) {
			const { visible, animated } = this.props;
			if (prevProps.visible !== visible && !visible && animated) {
				this.timer = window.setTimeout(() => {
					this.setState({ mounted: false });
				}, timeout);
			}
		}

		setMounted() {
			const { animated } = this.props;
			if (animated) {
				setTimeout(() => this.setState({ mounted: true }), 0);
			}
		}

		render() {
			const { visible } = this.props;
			const { mounted } = this.state;
			if (!mounted && !visible) {
				return null;
			}
			return (
				<Component
					mounted={mounted}
					setMounted={this.setMounted}
					{...this.props}
				/>
			);
		}
	}

	return React.forwardRef((props: CSUnmountDelayProps, ref) => {
		if (ref) {
			return <CSUnmountDelay {...props} forwardRef={ref} />;
		}
		return <CSUnmountDelay {...props} />;
	});
};

export default withCSUnmountDelay;
