// GridSizeControls.jsx
import { Box, Slider, TextField } from '@mui/material';

function GridSizeControls({ gridSize, onSizeChange, onSliderChange }) {
    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="X Size"
                    type="number"
                    value={gridSize.x}
                    onChange={onSizeChange('x')}
                    inputProps={{ min: 3, max: 20 }}
                    sx={{ width: 100 }}
                />
                <Slider
                    value={gridSize.x}
                    onChange={onSliderChange('x')}
                    min={3}
                    max={20}
                    sx={{ flex: 1 }}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="Y Size"
                    type="number"
                    value={gridSize.y}
                    onChange={onSizeChange('y')}
                    inputProps={{ min: 3, max: 20 }}
                    sx={{ width: 100 }}
                />
                <Slider
                    value={gridSize.y}
                    onChange={onSliderChange('y')}
                    min={3}
                    max={20}
                    sx={{ flex: 1 }}
                />
            </Box>
        </Box>
    );
}

export default GridSizeControls;