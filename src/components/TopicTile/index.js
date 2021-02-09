import React from "react";
import "./index.css";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import StarIcon from "@material-ui/icons/Star";

const TopicTile = ({ topic, relatedTo, stars, onTileClick }) => {
    const handleClick = () => {
        onTileClick(topic);
    };

    return (
        <Box className="TopicTile">
            <Badge
                badgeContent={
                    <Box className="badge-content">
                        <StarIcon className="star-icon" />
                        {stars}
                    </Box>
                }
                max={1000000}
                color="primary"
            >
                <Chip
                    avatar={<Avatar>{relatedTo[0]}</Avatar>}
                    label={topic}
                    clickable
                    color="default"
                    onClick={handleClick}
                    variant="outlined"
                />
            </Badge>
        </Box>
    );
};

export default TopicTile;
