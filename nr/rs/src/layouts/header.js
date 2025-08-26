import AlramBnt from "../components/common/alramBnt";
import LocationBnt from "../components/common/locationBnt";
import SettingBnt from "../components/common/settingBnt";


export default function Header() {
    return (
        <header className="main-layout-header">
            <LocationBnt />
            <h1>Header</h1>
            <AlramBnt />
            <SettingBnt />
        </header>
    );
}
