import { NextPage } from "next";
import { EnumSelect, EnumText } from "../../components/enums";

const Users: NextPage = () => {
  return (
    <>
      <div>
        Enum Select Test0: <EnumSelect name="Test0" />
      </div>
      <div>
        Enum Select Test1: <EnumSelect name="Test1" />
      </div>
      <div>
        Enum Select Test2: <EnumSelect name="Test2" />
      </div>
      <div>
        <EnumText name="Test1" value="GOOD"></EnumText>/
        <EnumText name="Test1" value="BAD"></EnumText>
      </div>
      <div>
        <EnumText name="Test2" value="YES"></EnumText>/
        <EnumText name="Test2" value="NO"></EnumText>
      </div>
    </>
  );
};

export default Users;
