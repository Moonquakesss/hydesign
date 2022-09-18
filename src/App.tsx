import Button, { ButtonSize } from "./components/Button/button";
import { ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Menu className={""} mode={"vertical"} onSelect={(index) => alert(index)}>
        <MenuItem index={1}>
          1
        </MenuItem>
        <MenuItem index={2} disabled>
          2
        </MenuItem>
        <MenuItem index={3}>
          3
        </MenuItem>
      </Menu>
      <header className="App-header">
        <Button btnType={ButtonType.Link} href={'www.baidu.com'}>i am a link baidu</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'} disabled>i am a link baidu</Button>
        <Button btnType={ButtonType.Default}>i am a button</Button>
        <Button btnType={ButtonType.Primary} disabled>i am a button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>i am a large button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>i am a large button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} autoFocus={true}>i am a large button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
