import FunctionComponentCycleLife from './FunctionComponent';

// https://github.com/Wavez/react-hooks-lifecycle
// https://dev.to/alter80/component-lifecycle-in-react-16i3

export const Home = () => {
    return (
        <div className="home">

            <FunctionComponentCycleLife />
            {/* <SetInterval /> */}
        </div>
    );
};
