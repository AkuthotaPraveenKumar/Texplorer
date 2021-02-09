const parse = (data) => {
    console.log(data);
    let parsed = [];
    let set = new Set();
    try {
        const nodes = data.data.search.nodes;
        nodes.forEach((n) => {
            const { nodes: subNodes } = n.repositoryTopics;
            subNodes.forEach((s) => {
                if (!set.has(s.topic.name)) {
                    set.add(s.topic.name);
                    parsed.push(s.topic);
                }
            });
        });
    } catch (e) {
        console.error(e);
    }
    return [...new Set(parsed)];
};

export default {
    parse,
};
