import logo from '../assets/icon2.png';

export function Header() {
  return (
    <header>
      <div className="logoName">
        <img src={logo} width="30" height="30" alt="ByteLook logo" />
        <h3>ByteLook</h3>
      </div>

      <div className="window-buttons">
        <button
          id="minimize"
          title="Minimize"
          onClick={() => window.electron.sendFrameAction('MINIMIZE')}
        />
        <button
          id="maximize"
          title="Maximize"
          onClick={() => window.electron.sendFrameAction('MAXIMIZE')}
        />
        <button
          id="close"
          title="Close"
          onClick={() => window.electron.sendFrameAction('CLOSE')}
        />
      </div>
    </header>
  );
}
