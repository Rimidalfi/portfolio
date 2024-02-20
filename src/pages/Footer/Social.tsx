interface Socials {
  logoURL: string;
  URL: string;
}
interface Props {
  socialEntry: Socials;
}

export default function Social({ socialEntry }: Props) {
  return (
    <>
      <a href={socialEntry.URL}>
        <img src={socialEntry.logoURL} alt="" className="h-6 w-6 flex " />
      </a>
    </>
  );
}
