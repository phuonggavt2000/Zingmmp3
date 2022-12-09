import { Button } from 'react-bootstrap';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

import Tippy from '@tippyjs/react';
import data from '../../../data';
import Search from '../Search/Search';
function Control() {
    return (
        <div className="control">
            <div className="control_search">
                <Button variant="link" className="control_previous">
                    <MdSkipPrevious />
                </Button>

                <Button variant="link" className="control_previous">
                    <MdSkipNext />
                </Button>

                <Search />
            </div>
            <div className="control_items">
                {data.searchContent.controlItems.map((item, index) => (
                    <Tippy content={item.content} key={index}>
                        <div className="control_item">{item.icon}</div>
                    </Tippy>
                ))}
            </div>
        </div>
    );
}

export default Control;
