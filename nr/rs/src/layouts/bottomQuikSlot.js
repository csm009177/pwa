import FeedBnt from "../components/common/feedBnt";
import MyPageBnt from "../components/common/mypageBnt";
import UploadBnt from "../components/common/uploadBnt";
import WetherBnt from "../components/common/wetherBnt";

export default function BottomQuickSlot() {
  return (
    <div className='BottomQuickSlot'>
      <WetherBnt />
      <FeedBnt />
      <UploadBnt />
      <MyPageBnt />
    </div>
  );
}
