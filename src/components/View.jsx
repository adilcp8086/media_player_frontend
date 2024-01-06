import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getAllVideos } from '../services/allAPI';

function View({uploadVIdeoStatus}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState([])
  const getAllUploadVideos = async () => {
    const response = await getAllVideos();
    console.log("1")
    console.log(response)
    const { data } = response;
    setAllVideo(data)

  }
  useEffect(() => {
    getAllUploadVideos()
  }, [uploadVIdeoStatus,deleteVideoStatus])
  return (
<>
<Row>
{
          allVideo?.length > 0 ?
            allVideo.map((video) => (
              <Col sm={12} md={6} lg={4} xl={4} className='m-5' >
                <Videocard  displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
              </Col>
            ))
            :
            <p>NO item to Display</p>

        }
      </Row>
</>
  )
}

export default View