import { useEffect, useState } from "react";
import "./index.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import topicAPI from "../../apis/topics/topic";
import Header from "../../components/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import TopicTile from "../../components/TopicTile";

const defaultTopic = "react";

const Home = () => {
    const [error, setError] = useState("");
    const [topic, setTopic] = useState(defaultTopic);
    const [isLoading, setLoading] = useState(true);
    const [topicData, setTopicData] = useState(null);

    const fetchData = async (topic) => {
        setLoading(true);
        setError("");
        setTopicData(null);
        const data = await topicAPI.fetchTopics(topic);
        data.error ? setError(data.error) : setTopicData(data);
        setLoading(false);
    };

    const onRelatedTopicClick = (topic) => {
        setTopic(topic);
    };

    useEffect(() => {
        fetchData(topic);
    }, [topic]);

    return (
        <Box className="Home">
            <Header heading={`Github Topic Explorer - ${topic}`} />
            <Container maxWidth="lg" className="main-container">
                {isLoading && <CircularProgress color="secondary" />}
                {error && (
                    <Box className="error">
                        <Typography variant="body1" gutterBottom>
                            {error}
                        </Typography>
                    </Box>
                )}
                <Box className="topic-container">
                    {topicData &&
                        !isLoading &&
                        topicData.map((t) => (
                            <TopicTile
                                topic={t.name}
                                relatedTo={topic}
                                stars={t.stargazerCount}
                                onTileClick={onRelatedTopicClick}
                            />
                        ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
