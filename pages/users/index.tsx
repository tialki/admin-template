import { NextPage } from "next";
import { EnumText } from "../../components/enums";

const Users: NextPage = () => {
  return (
    <>
      users
      <EnumText name="Test" value="GOOD"></EnumText>
      <EnumText name="Test" value="BAD"></EnumText>
    </>
  );
};

export default Users;
