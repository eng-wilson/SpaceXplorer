import { gql, useQuery } from "@apollo/client";

import { LaunchDTO } from "../../dtos/LaunchDTO";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10, sort: "launch_date_local", order: "desc") {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export const useGetLaunches = (): LaunchDTO[] => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) {
    return [];
  }
  if (error) {
    return [];
  }
  return data.launchesPast;
};
