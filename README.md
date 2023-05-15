# web_serv_concepts_node

-> run each file individually to see each concept in action:
    command: node [file_name].js
    the servers are running on port:8000 (http://localhost:8000)

-> for testing POST method functionality use this as a template:
    fetch('http://localhost:8000/friends', {
        method: 'POST',
        body: JSON.stringify({
            id: 3,
            name: 'Grace'
        })
    })
    .then((res)=>res.json())
    .then((friend)=>console.log(friend))

-> the progression: 
    index -> routing -> paramterized -> httpMethods