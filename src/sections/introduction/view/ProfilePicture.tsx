import Image from "next/image";

export default function ProfilePicture() {
  return (
    <>
      <Image
        src="/assets/image/조가람.png"
        alt="profile picture"
        width={300}
        height={300}
        style={{ borderRadius: "50%" }}
        priority
      />
    </>
  );
}
