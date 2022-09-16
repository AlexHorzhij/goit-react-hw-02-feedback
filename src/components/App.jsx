import { Feedback } from "./Feedback/Fedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 100,
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback/>
    </div>
  );
};
