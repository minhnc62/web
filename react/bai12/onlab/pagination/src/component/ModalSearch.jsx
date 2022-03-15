import { Modal, Button,Input,Empty } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
 import { Outlet } from 'react-router-dom';

import { searchMovieByTitle, changeTitle } from '../store/movieSlide';

const ModalSearch = () => {
    const { Search } = Input;
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { error, title, movie } = useSelector((state) => state.movie);

    let controller;


    const handleChange = (e) => {
        controller && controller.abort();
        controller = new AbortController();
        const { payload } = dispatch((changeTitle(e.target.value)));//Lưu lại text người dùng nhập vào

        if (payload.trim().length > 0) {
            dispatch(searchMovieByTitle({ signal: controller.signal }));
            // navigate("/");
        }

    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Button type="primary" onClick={showModal}>
            Search
        </Button>
        <Modal title="Tìm kiếm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form action="" className='search'
                onSubmit={(e) => e.preventDefault()}
                onChange={handleChange}>
         
                <Search placeholder="Tìm kiếm..." value={title} onChange={handleChange}></Search>
                
            </form>
            {error && <span className='error'><Empty /></span>}
            
            <Outlet />
        </Modal>
    </>;
}

export default ModalSearch;
