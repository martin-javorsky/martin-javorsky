import { images } from "@/constants/common/images";
import Image from "next/image";

function Skills() {
  return (
    <div>
      This is skills page
      <Image src={images.testImage} width={500} height={500} alt="image" />
    </div>
  );
}

export default Skills;
