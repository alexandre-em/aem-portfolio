import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Description, Main, Text, Title } from "./style";

export default function ListItem({ data }: ListItemProps) {
  return (
    <Main>
      <img
        src={data.logo}
        loading="lazy"
        alt=""
        width="140"
        height={data.imageHeight}
      />
      <Text>
        <Title>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, color: blueGrey[700] }}
          >
            {data.company}
          </Typography>
          <Typography sx={{ fontStyle: "italic", color: blueGrey[400] }}>
            {data.year}, @{data.location}
          </Typography>
        </Title>
        <Typography sx={{ fontStyle: "italic" }} color="secondary">
          {data.job}
        </Typography>
        <Description>
          {data.description.split("\n").map((task: string) => (
            <Typography variant="overline" sx={{ lineHeight: "1.5em" }}>
              {task}
            </Typography>
          ))}
        </Description>
      </Text>
    </Main>
  );
}
