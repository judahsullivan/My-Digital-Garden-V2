import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          size={'md'}
          aria-label="Toggle theme"
          variant={'ghost'}
          icon={useColorModeValue(<BiSun />, <BiMoon />)}
          onClick={toggleColorMode}
          _hover={{
            borderRadius: 'md'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
