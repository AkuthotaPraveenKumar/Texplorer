import { gql } from "@apollo/client";

export const gitHubTopicQuery = gql`
    query Topics($topicQuery: String!) {
        search(query: $topicQuery, type: REPOSITORY, first: 10) {
            nodes {
                ... on Repository {
                    repositoryTopics(first: 10) {
                        nodes {
                            topic {
                                name
                                stargazerCount
                            }
                        }
                    }
                }
            }
        }
    }
`;
