import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Doctor ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function ScrollableBox() {
  return (
    <Box
      sx={{ width: '100%', height: 150, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={150}
        width={360}
        itemSize={46}
        itemCount={5}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}