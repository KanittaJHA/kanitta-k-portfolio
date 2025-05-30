import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
  const skills = [
    "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    "https://www.manektech.com/storage/developer/1646733543.webp",
    "https://cdn-icons-png.flaticon.com/256/5968/5968322.png",
    "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={skill} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
