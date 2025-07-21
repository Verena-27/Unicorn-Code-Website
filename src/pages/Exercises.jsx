import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Row , Col, OverlayTrigger, Form, Tooltip, Modal, Popover} from "react-bootstrap";
// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

// ...

// Add the faEdit icon to the library
library.add(faEdit);


function Exercises(){

    const [exercisesList, setExercisesList] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [showModal, setShowModal] = useState(false); //for description editing overlay
    const [updatedTag, setUpdatedTag] = useState(null);
    const [newTag, setNewTag] = useState("");
    const [selectedExercise, setSelectedExercise] = useState({tags:[],});
    const [showExerciseModal, setShowExerciseModal] = useState(false);
    


    useEffect(() => {
        // Fetch exercises from the backend when the component mounts
        const fetchExercises = async () => {
          try {
            const response = await fetch('http://localhost:5000/exercises');
            if(response.ok){
                const result = await response.json();
                console.log("exercises ", result.exercises);
                setExercisesList(result.exercises);
            }
            //setExercises(response.data);
          } catch (error) {
            console.error('Error fetching exercises:', error);
          }
        };
    
        fetchExercises();
      }, []); 

      useEffect(() => {
        // Fetch exercises from the backend when the component mounts
        const fetchTags = async () => {
          try {
            const response = await fetch('http://localhost:5000/tags');
            if(response.ok){
                const result = await response.json();
                console.log("exercises ", result.tags);
                setTagsList(result.tags);
            }
            //setExercises(response.data);
          } catch (error) {
            console.error('Error fetching exercises:', error);
          }
        };
    
        fetchTags();
      }, []); 

      const handleEditModalShow = (tag) => {
        setSelectedTag(tag);
        setUpdatedTag(tag.name); //???
        setShowModal(true);
      };
    
      const handleEditModalClose = () => {
        setSelectedTag(null);
        setUpdatedTag("");
        setShowModal(false);
      };

      const handleDeleteTag = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tags/${selectedTag.id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                // Update the tagsList state by filtering out the deleted tag
                //setTagsList((prevTagsList) => prevTagsList.filter((tag) => tag.id !== tagId));
            } else {
                // Handle error, e.g., display an error message
                console.error('Failed to delete tag');
            }
        } catch (error) {
            console.error('Error deleting tag:', error);
        }
    };
    

      const handleUpdateTag = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tags/edit/${selectedTag.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: updatedTag,
                }),
            });
    
            if (response.ok) {
                // Handle success, e.g., close the modal
                handleEditModalClose();
            } else {
                // Handle error, e.g., display an error message
                console.error('Failed to update tag');
            }
        } catch (error) {
            console.error('Error updating tag:', error);
        }
    };

    const handleAddTag = async () => {
      try {
          const response = await fetch('http://localhost:5000/tags/add', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: newTag,
              }),
          });
  
          if (response.ok) {
              // Update the tagsList state by fetching the updated list
              //const updatedTags = await fetchTagsList();
              
              //setTagsList(updatedTags);
  
              // Clear the newTag input
              setNewTag("");
          } else {
              // Handle error, e.g., display an error message
              console.error('Failed to add tag');
          }
      } catch (error) {
          console.error('Error adding tag:', error);
      }
  };

  const handleEditExercise = (exercise) => {
    // Set the exercise to be edited
    setSelectedExercise(exercise);
    // Open the modal
    setShowExerciseModal(true);
  }; 

  const handleAddTagToExercise = (tag) => {
    // Check if the tag is already in the list
    if (!selectedExercise.tags.includes(tag)) {
      // Add the tag to the list
      setSelectedExercise((prevExercise) => ({
        ...prevExercise,
        tags: [...prevExercise.tags, tag],
      }));
    }
  };

  const handleRemoveTag = (index) => {
    // Remove the tag at the specified index
    setSelectedExercise((prevExercise) => {
      const updatedTags = [...prevExercise.tags];
      updatedTags.splice(index, 1);
      return { ...prevExercise, tags: updatedTags };
    });
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      // Update the state based on the file type (codeFile or solutionFile)
      /*setSelectedExercise((prevExercise) => ({
        ...prevExercise,
        [fileType]: file,
      }));*/
      console.log("file selected");
    }
  };



    return(
        <>
        {/*Table for exercises with tags*/}
        <Row>
          <Col>
        <div className="exerciseList">
        <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Name</th>
              <th>Description</th>
              <th>Code File</th>
              <th>Solution File</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {exercisesList.map((item, index) =>(
              <tr key={index}>
                <td>
                    <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => handleEditExercise(item)}
                        style={{ cursor: 'pointer' }}
                    />
                </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.code_file}</td>
              <td>{item.solution_file}</td>
              <td>
              {item.tags.map((tag, tagIndex) => (
                <OverlayTrigger
                    placement="top"
                    trigger="click"
                    rootClose
                    key={`delete-popover-${tagIndex}`}
                    overlay={
                        <Popover>
                            <Popover.Header as="h3">{`Delete Tag`}</Popover.Header>
                            <Popover.Body>
                                {`Do you want to delete the tag "${tag}" from this exercise?`}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteTag(item, tag)}
                                >
                                    Delete
                                </Button>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button data-id={tagIndex}>{tag}</Button>
                </OverlayTrigger>
              ))}
            </td>
            </tr>
            ))}
          </tbody>
        </Table>
        </div>
        </div>
        </Col>
        
        {/*Table for Tags*/}
        <Col>
        <div className="tagList">
        <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            {tagsList.map((item, index) =>(
              <tr key={index}>
                <td>
                  <Button data-id={index} onClick={() => handleEditModalShow(item)}>{item.name}</Button>
                </td>
            </tr>
            ))}
          </tbody>
        </Table>
        </div>
        </div>
        {/*Form group for adding a tag to db*/}
        <Form.Group controlId="formNewTag">
          <Form.Label>New Tag</Form.Label>
          <Form.Control
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              style={{ width: '300px' }} 
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTag}>
            Add Tag
        </Button>

        </Col>
        </Row> 

        {/*Modal for the editing of tags*/}
        <Modal show={showModal} onHide={handleEditModalClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Tag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group controlId="formUpdatedTag">
                <Form.Label>Update tag name</Form.Label>
                <Form.Control
                value={updatedTag}
                onChange={(e) => setUpdatedTag(e.target.value)}
                />
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleEditModalClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDeleteTag}>
            Delete Tag
            </Button>
            <Button variant="primary" onClick={handleUpdateTag}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>  
            
        {/* Modal for editing exercise */}
        <Modal show={showExerciseModal} onHide={() => setShowExerciseModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Exercise</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={selectedExercise.name}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={selectedExercise.description}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group>
              <Form.Label htmlFor="codeFile">Code File</Form.Label>
              <Form.Control
                id="codeFile"
                type="file"
              />
            </Form.Group>
              
              <Form.Group>
              <Form.Label>Tags</Form.Label>
              <div>
                {selectedExercise.tags.map((tag, index) => (
                  <Button key={index} variant="info" style={{ marginRight: '5px' }}>
                    {tag}
                    <span
                      style={{ marginLeft: '5px', cursor: 'pointer' }}
                      onClick={() => handleRemoveTag(index)}
                    >
                      &#10006;
                    </span>
                  </Button>
                ))}
              </div>
              <Form.Control
                as="select"
                onChange={(e) => handleAddTagToExercise(e.target.value)}
              >
                <option value="" disabled selected>
                  Add Tag
                </option>
                {tagsList.map((tag) => (
                  <option key={tag.id} value={tag.name}>
                    {tag.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary">
                Close
            </Button>
            <Button variant="danger" >
              Delete Exercise
            </Button>
            <Button variant="primary">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>




        </>
    );
}

export default Exercises;

