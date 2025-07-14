import styled from "styled-components";
import { useState } from "react";
import ModalProjeto from "./ModalProjeto";
import { FaHeart } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";

const GridContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #fff;
`;

const Col = styled.div`
  padding: 0.09rem;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.694);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartIcon = styled(FaHeart)`
  color: white;
  font-size: 28px;
  margin-right: 20px;
`;

const MessageIcon = styled(BiSolidMessageRounded)`
  color: white;
  font-size: 28px;
`;

export default function PostGrid({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <GridContainer>
      <div className="container-fluid">
        <div className="row g-0">
          {posts.map((post, idx) => (
            <Col key={idx} className="col-4 col-md-4">
              <CardWrapper onClick={() => setSelectedPost(post)}>
                <Img src={post.images[0]} alt={`Projeto ${idx}`} />
                <Overlay className="overlay">
                  <HeartIcon />
                  <MessageIcon />
                </Overlay>
              </CardWrapper>
            </Col>
          ))}
        </div>
      </div>
      <ModalProjeto
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        projeto={selectedPost}
      />
    </GridContainer>
  );
}
